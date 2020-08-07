export default function ({store, error, redirect}) {
    if (!store.state.admin.vendor) {
        return redirect('/error/vendorpage')
    }
}
