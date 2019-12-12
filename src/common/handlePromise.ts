// https://dev.to/sobiodarlington/better-error-handling-with-async-await-2e5m

/**
 * @description ### Returns Go / Lua like responses(data, err)
 * when used with await
 *
 * - Example response [ data, undefined ]
 * - Example response [ undefined, Error ]
 *
 *
 * When used with Promise.all([req1, req2, req3])
 * - Example response [ [data1, data2, data3], undefined ]
 * - Example response [ undefined, Error ]
 *
 *
 * When used with Promise.race([req1, req2, req3])
 * - Example response [ data, undefined ]
 * - Example response [ undefined, Error ]
 *
 * @param {Promise} promise
 * @returns {Promise} [ data, undefined ]
 * @returns {Promise} [ undefined, Error ]
 */
export const handle = (promise) => {
  return promise
    .then(data => ([data, undefined]))
    .catch(error => Promise.resolve([undefined, error]));
}

// async function userProfile() {
//   const [user, userErr] = await handle(getUser());

//   if(userErr) { throw new Error('Could not fetch user details'); }

//   const [friendsOfUser, friendErr] = await handle(
//     getFriendsOfUser(userId)
//   );

//   if(friendErr) { throw new Error('Could not fetch user\'s friends'); }

//   const [posts, postErr] = await handle(getUsersPosts(userId));

//   if(postErr) { throw new Error('Could not fetch user\'s posts'); }

//   showUserProfilePage(user, friendsOfUser, posts);
// }
