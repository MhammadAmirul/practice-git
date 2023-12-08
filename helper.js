export function formatter (amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'curency',
        currency: 'IDR',
    }).format(amount)

}