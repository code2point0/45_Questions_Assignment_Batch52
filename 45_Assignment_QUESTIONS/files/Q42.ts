import { magicians, show_magicians } from './Q41';
function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
      magicians[i] += " the Great";
    }
}
make_great(magicians);
show_magicians(magicians);
  