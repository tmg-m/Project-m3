# My project's name

​Work Floo

## Description

​ An App dedicated to opening task/issues encountered in work of any kind and any subjects with an open mindset of confronting it globally as a community and solve it, may the issues/problems be form as lower as school level to professional level doesnt matter.

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
{
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  imgUrl: {
    type: String,
    default: '',
  },
  about: { type: String, },
}
```  
-Task model

```javascript
 {
  creator: { type: Schema.Types.ObjectId, ref: 'User'},
  title: { type: String },
  discription: { type: String },
  hot: { type: Boolean, default: false, },
  imgUrl: { type: String },
  assist: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}
``` 
-Chat room model

```javascript
 {
  title: { type: String, required: true },
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  chat: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
  relatedTask: { type: Schema.Types.ObjectId, ref: 'Task' },
}
```  
-Message model

```javascript
 {
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  name: { type: String },
  message_body: { type: String },
}
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
| Task | POST | /user/{user_id}/task/ | Yes | { title, discription, img, hot } | /task/{task_id} |
| Task edit | GET | /task/{task_id}/edit | Yes |  |  |
| Task edit | POST | /user/{user_id}/task/{task_id}/edit | Yes | { title, discription, img, hot } | /task/{task_id} |
| Task delete | POST | /user/{user_id}/task/{task_id}/delete | Yes | { title, discription, img, hot } | /user/{user_id}/task/ |
| Profile | GET | /user/{user_id}/profile | Yes |  |  |
| Profile edit | GET | /user/{user_id}/edit | Yes |  | /user/{user_id}/edit |
| Profile edit | POST | /user/{user_id}/edit | Yes | { name, email, about, img } | /user/{user_id} |
| Profile delete | POST | /user/{user_id}/delete | Yes | { user_id } | / |
| Chat Inbox | GET | /chatInbox/ | Yes |  |  |
| Community | GET | /community/ | Yes |  |  |
| Chat room | GET | /chatInbox/{chatRoom_Id}/ | Yes |  |  |
| chat room leave | POST | /{chatRoom_Id}/ | Yes | { user_id } | /chatInbox |
| Message| POST | /{chatRoom_Id}/message | Yes | { chatRoom_id, secondUser_id } |  |
| Error | GET | /error | No |  |  |
​

## Links

- [Slides](https://slides.com/mahendra-t/deck-ec6450#/0/4)
- [Frontend repository](https://github.com/tmg-m/Work-floo)
- [Deployed version netlify](https://workfloo.netlify.app/)
- [Deployed version heroku](https://workfloo.herokuapp.com/)
- [Created by](https://github.com/tmg-m)
