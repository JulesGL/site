// Ajoutez ce code à votre fichier spotify.js

const PLAYLIST_ID = 'ID_DE_VOTRE_PLAYLIST';

// Fonction pour récupérer les informations sur les morceaux de la playlist
async function getPlaylistTracks() {
    const token = await getAccessToken();

    if (token) {
        // Utilisez le token pour appeler l'API Spotify
        const response = await fetch(`https://api.spotify.com/v1/playlists/${PLAYLIST_ID}/tracks`, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });

        if (response.ok) {
            const data = await response.json();
            updatePlaylistTracks(data.items);
        } else {
            console.error('Erreur lors de la récupération des morceaux de la playlist');
        }
    }
}

// Fonction pour mettre à jour les informations sur les morceaux de la playlist sur la page
function updatePlaylistTracks(tracks) {
    const playlistTracksContainer = document.getElementById('playlist-tracks');

    if (tracks.length > 0) {
        const html = tracks.slice(0, 5).map(track => `
            <div class="playlist-track">
                <img src="${track.track.album.images[0].url}" alt="${track.track.name} Album Cover">
                <div>
                    <p>${track.track.name}</p>
                    <p>${track.track.artists.map(artist => artist.name).join(', ')}</p>
                </div>
            </div>
        `).join('');

        playlistTracksContainer.innerHTML = html;
    } else {
        playlistTracksContainer.innerHTML = '<p>Aucun morceau dans la playlist</p>';
    }
}

// Appel de la fonction au chargement de la page
document.addEventListener('DOMContentLoaded', getPlaylistTracks);