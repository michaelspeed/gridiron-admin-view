export default function ({store, error, redirect}) {
    if (!store.state.admin.administrator || !store.state.admin.vendor) {
        return redirect('/error/403')
    }
}
