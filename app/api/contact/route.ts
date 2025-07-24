import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, subject, message, budget } = await request.json();

    // Validation basique
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis' },
        { status: 400 }
      );
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Adresse email invalide' },
        { status: 400 }
      );
    }

    // Envoi de l'email
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'Webence <onboarding@resend.dev>', // Nom + domaine Resend
      to: [process.env.TO_EMAIL || 'votre-email@exemple.com'], // Ton email personnel
      subject: `🚀 Nouveau contact Webence: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Nouveau message de contact - Webence</h2>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nom:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${company ? `<p><strong>Entreprise:</strong> ${company}</p>` : ''}
            <p><strong>Sujet:</strong> ${subject}</p>
            ${budget ? `<p><strong>Offre demandée:</strong> ${budget}</p>` : ''}
          </div>
          
          <div style="background: white; padding: 20px; border-left: 4px solid #000; margin: 20px 0;">
            <h3 style="margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          <p style="color: #666; font-size: 12px;">
            <em>Envoyé depuis le formulaire de contact du site Webence</em><br>
            <em>Répondre directement à cet email pour contacter ${name}</em>
          </p>
        </div>
      `,
      // Email de réponse automatique pour le client
      replyTo: email,
    });

    if (error) {
      console.error('Erreur Resend:', error);
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi de l\'email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email envoyé avec succès', id: data?.id },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur serveur:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
} 