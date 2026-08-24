import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export function ToRahulRoy({ name, email, message }: EmailTemplateProps) {
  console.log('ToRahulRoy Props:', { name, email, message });
  return (
    <div>
      <h1>Hey, {name} just contacted you!</h1>
      <p>Email: {email}</p>
      <p>Message: {message}</p>
    </div>
  );
}

export function ToVisitor({ name, email, message }: EmailTemplateProps) {
  return (
    <div>
      <h1>Welcome, {name}!</h1>
      <p>Your message has been received.</p>
      <p>I will get back to you at this email.</p>
      <br />
      <br />
      <p>Regards,</p>
      <br />
      <p>Rahul Roy</p>
    </div>
  );
}