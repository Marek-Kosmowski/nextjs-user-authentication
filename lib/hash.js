const bcrypt = require('bcrypt');
const saltRounds = 10;

export function hashUserPassword(password) {
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
}

export function verifyPassword(storedPassword, providedPassword) {
  bcrypt.compareSync(storedPassword, providedPassword);
}
