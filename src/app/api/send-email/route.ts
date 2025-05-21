import { emailService } from '@/services';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const data = await req.json();

  try {
    const [resultMe, resultSender] = await Promise.all([
      emailService.sendMeContactMessage(data),
      emailService.sendConfirmationToSender(data),
    ]);

    const errors: string[] = [];

    if (resultMe.rejected.length > 0) {
      errors.push('Owner email failed to send.');
    }

    if (resultSender.rejected.length > 0) {
      errors.push('Confirmation email to sender failed to send.');
    }

    if (errors.length > 0) {
      throw new Error(errors.join(' '));
    }

    return NextResponse.json({
      success: true,
      message: 'Both emails sent successfully.',
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to send email(s)',
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
