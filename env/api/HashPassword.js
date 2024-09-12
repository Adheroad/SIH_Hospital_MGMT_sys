import bcrypt from 'bcrypt';

const password = 'FuckS@69';
bcrypt.hash(password, 10, (err, hash) => {
    if (err) throw err;
    console.log('Hashed password:', hash);
});
