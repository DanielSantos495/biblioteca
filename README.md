# biblioteca
Recomendaciones de libros.

- Pequeña SPA (Single Page App) con Router, donde simulamos un LogIn, LogOut y un Register usando Redux, usamos el servicio Gravatar cuando hacemos LogIn o Register nos muestra un avatar en la cuenta creada y un conjunto de libros recomendados para leer.

- Consumimos el servicio de Gravatar con el paquete `md5` para crear un hash aleatorio.

![Gravatar](https://es.gravatar.com/site/implement/)
![md5](https://www.npmjs.com/package/md5)

```
  import md5 from 'md5';
  const gravatar = (email) => {

  const base = 'https://gravatar.com/avatar/';
  const formattedEmail = (email).trim().toLowerCase();
  const hash = md5(formattedEmail, { encoding: 'binary' });

  return `${base}${hash}`;

};```

### Instalación
```
npm install
```

### Ejecución
```
npm run start
```

biblioteca is released under the MIT License.