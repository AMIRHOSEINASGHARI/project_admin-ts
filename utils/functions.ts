// bcryptjs
import { compare, hash } from "bcryptjs";

export const hashPassword = async (password: string) => {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
};

export const verifyPassword = async (
  password: string,
  hashedPassword: string
) => {
  const isValid = await compare(password, hashedPassword);
  return isValid;
};

export const shorterText = (
  text: string,
  maxCharacter: number,
  dot?: boolean
): string => {
  const t = String(text);

  if (t.length > maxCharacter) {
    return dot
      ? `${t.substring(0, maxCharacter)}...`
      : `${t.substring(0, maxCharacter)}`;
  } else {
    return text;
  }
};
