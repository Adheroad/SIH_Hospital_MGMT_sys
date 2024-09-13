import bcrypt from 'bcrypt';

const password = 'Ssssar!!6';
bcrypt.hash(password, 10, (err, hash) => {
    if (err) throw err;
    console.log('Hashed password:', hash);
});
