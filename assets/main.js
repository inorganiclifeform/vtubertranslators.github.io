function createList(channels) {
    return channels.map((channel) => `
        <a href="${channel.url}/videos" class="channel" target="_blank">
            ${channel.name}
        </a>
    `).join('');
}

document.querySelector('.channel-list')
    .innerHTML = createList(window.channels);
