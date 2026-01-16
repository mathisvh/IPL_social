export function validateEmail(value: string): boolean {
  // aucun espace autorisé
  if (value.includes(" ")) {
    return false;
  }

  // doit contenir un seul @
  const atIndex = value.indexOf("@");
  if (atIndex === -1) return false;
  if (value.indexOf("@", atIndex + 1) !== -1) return false;

  // texte avant et après le @
  if (atIndex === 0) return false;
  if (atIndex === value.length - 1) return false;

  const domain = value.slice(atIndex + 1);

  // domaine doit contenir un point
  if (!domain.includes(".")) return false;

  // le point ne peut pas être le dernier caractère
  if (domain.endsWith(".")) return false;

  return true;
}
