export default function ({ store, redirect }) {
  const {roles} = store.state.user;

  if ( process.client && !(roles && roles.includes('content-admin')) )
    return redirect('/')
}