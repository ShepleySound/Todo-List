const categoryDisplay = (checkbox, category) => {
    checkbox.addEventListener('change', (e) => {
        if (e.target.checked) {
            category.classList.remove('hidden')
        }
        else {
            category.classList.add('hidden')
        }
    })
}

export default categoryDisplay