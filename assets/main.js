function createList(channels) {
    return channels.map((channel) => `
        <a href="https://www.youtube.com/channel/${channel.id}/videos" class="channel ta-c" target="_blank">
            ${channel.name}
        </a>
    `).join('');
}

document.querySelector('.channel-list')
    .innerHTML = createList(window.channels);
