exports.isAdmin = (req, res, next) => {
    if (req.body.permissions !== true) {
        res.send('no tienes permisos!');
    }
    if (req.body.permissions === true) {
        next();
    }
};

exports.requiredFields = (req, res, next) => {
    if ((req.body.username === '') || (req.body.mail === '')
    || (req.body.password === '')) {
        res.send('campo invalido');
    } else {
        next();
    }
};

exports.username = (req, res, next) => {
    var email = /\S+@\S+\.\S+/
    if(!(email.test(req.body.username))){
	     res.send('correo electroniuco no valido');
  } else {
  next();
  }
}


exports.password = (req, res, next) => {
/*
Minimo 8 caracteres
Maximo 15
Al menos una letra mayúscula
Al menos una letra minucula
Al menos un dígito
No espacios en blanco
*/
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    if(regex.test(req.body.password)){
    res.send('la contrasena no cumple los requisitos')
  }else {
    next();
  }
}
