export default function ({store, error, redirect}) {
    if (!store.state.admin.administrator) {
        return redirect('/error/403')
    }
}
