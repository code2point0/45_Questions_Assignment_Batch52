export const magicians = ["David Copperfield", "Penn & Teller", "Houdini"];

export function show_magicians(magicians: string[]) {
  for (const magician of magicians) {
    console.log(magician);
  }
}
show_magicians(magicians);
