import React, { useContext, useEffect, useState } from 'react';
import { SelectProfileContainer } from './profiles';
import { FirebaseContext } from '../context/firebase';
import { Loading } from '../components';

export function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    console.log('profile', profile);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  const user = firebase.auth().currentUser || {};
  return profile.displayName ? (
    loading ? (
      <Loading src={user.photoURL} />
    ) : null
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
