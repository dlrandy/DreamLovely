import Post from '@Models/post/Post'
import User from '@Models/user/User'
import {  ajax } from 'rxjs/ajax'

const wrapPromise = (promise:Promise<T>) => {
  let status: 'pending' | 'success' | 'error' ='pending';
  let suspender = promise.then

}

export const fetchData = () => {
  const userPromise = fetchUser().toPromise()
  const postPromsie = fetchPosts().toPromise()

  return {
    user: wrapPromise(userPromise),
    posts: wrapPromise(postPromsie)
  }
}

const fetchUser = () => {
  return ajax.getJSON<User>('https://jsonplaceholder.typicode.com/users/1',{})
}

const fetchPosts = () => {
  return ajax.getJSON<Post>('https://jsonplaceholder.typicode.com/posts',{})
}


