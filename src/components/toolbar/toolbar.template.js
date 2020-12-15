function toButton(button) {
    return `
    <div class="button">
        <i class="material-icons">${button.icon}</i>
    </div>
    `
}

export function createToolbar() {
    const buttons =[
        {icon: 'format_align_left'},
        {icon: 'format_align_center'},
        {icon: 'format_align_right'},
        {icon: 'format_bold'},
        {icon: 'format_italic'},
        {icon: 'format_underlined'},
    ]

    return buttons.map(toButton).join('')
}
