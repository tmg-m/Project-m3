# My project's name

​Work Floo

## Description

​ An App dedicated to opening task/issues encountered in work of any kind with an open mindset of confronting it globally and solve it, may the issues/problems be form as lower as school level to professional level doesnt matter.

This repository is the REST API for the [frontend repository Work-Floo](https://github.com/tmg-m/Work-floo).

### setup .env

you need to setup the `.env` like `.env.sample`
​

### Install the app

```
npm install
```

​

### Run the app

```
npm run start
```

​

### Models

-User model

```javascript
 { username: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: String,
  about: Date,
  hashedPassword: {
    type: String,
    required: [true, 'password is required'],
  },
  task: [
    {object},
    ],
  assist: [
    {object},
    ],
  ,}
```  
-Task model

```javascript
 { title: String,
   discription: String,
   hot: Boolean,
   assist: [
    {object of users}
   ],
  ,}
```  

## REST API endpoints

​
| Name | Method | Endpoint | Auth | Req.body | Redirects |
|-------|--------|-------------|------|---------------------|-----------|
| Home | GET | / | Yes | | |
| Home | POST | /search/ | Yes | { name } | / |
| Login | GET | /auth/login | No |  |  |
| Login | POST | /auth/login | No | { email, password } | / |
| Signup | GET | /auth/signup | No |  |  |
| Signup | POST | /auth/signup | No | { email, password, name, username, hashedPassword  } | / |
| Task | GET | /task/{task_id} | Yes | { id } |  |
| Task user | GET | /user/{user_id}/task/ | Yes |  |  |
| Task | POST | /user/{user_id}/task/ | Yes | { title, discription, img, urgent } | /task/{task_id} |
| Task edit | GET | /task/{task_id}/edit | Yes | { title, discription, img, urgent } |  |
| Task edit | POST | /user/{user_id}/task/{task_id}/edit | Yes | { title, discription, img, urgent } | /task/{task_id} |
| Task delete | POST | /user/{user_id}/task/{task_id}/delete | Yes | { title, discription, img, urgent } | /user/{user_id}/task/ |
| Profile | GET | /user/{user_id}/profile | Yes |  |  |
| Profile edit | GET | /user/{user_id}/edit | Yes | { title, discription, img, urgent } | /user/{user_id} |
| Profile edit | POST | /user/{user_id}/edit | Yes | { title, discription, img, urgent } | /user/{user_id}/ |
| Profile delete | POST | /user/{user_id}/delete | Yes | { user_id } | /login |
| Error | GET | /error | No |  |  |
​
​
​
​
​

## Links

- [Slides]()
- [Frontend repository](https://github.com/tmg-m/Work-floo)
- [Deployed version](https://workfloo.herokuapp.com/)
- [Created by](https://github.com/tmg-m)
