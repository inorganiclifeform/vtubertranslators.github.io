function createList(channels) {
    return channels.map((channel) => `
        <a href="${channel.url}" class="channel">
            ${channel.name}
        </a>
    `).join('');
}

document.querySelector('.channel-list')
    .innerHTML = createList(window.channels);
