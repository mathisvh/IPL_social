import { validateEmail } from "../src/validateEmail";

describe("validateEmail", () => {
  test("email valide simple", () => {
    expect(validateEmail("a@b.com")).toBe(true);
  });

  test("email invalide sans @", () => {
    expect(validateEmail("abc.com")).toBe(false);
  });

  test("email invalide avec espaces", () => {
    expect(validateEmail("a @b.com")).toBe(false);
    expect(validateEmail("a@b .com")).toBe(false);
    expect(validateEmail("a@b.com ")).toBe(false);
  });

  test("email invalide sans texte avant @", () => {
    expect(validateEmail("@b.com")).toBe(false);
  });

  test("email invalide sans texte après @", () => {
    expect(validateEmail("a@")).toBe(false);
  });

  test("email invalide sans point dans le domaine", () => {
    expect(validateEmail("a@bcom")).toBe(false);
  });

  test("email invalide si le point est en dernier", () => {
    expect(validateEmail("a@b.")).toBe(false);
    expect(validateEmail("a@b.c.")).toBe(false);
  });

  test("email valide avec sous-domaines", () => {
    expect(validateEmail("john@sub.domain.com")).toBe(true);
  });
});
