document.addEventListener('DOMContentLoaded', function() {
    const pets = [
        {
            name: 'Buddy',
            age: '2 years',
            breed: 'Golden Retriever',
            description: 'Buddy is a playful and friendly Golden Retriever who loves to play fetch and cuddle. He is looking for a loving home.',
            picture: 'images/buddy.jpg'
        },
        {
            name: 'Milo',
            age: '1 year',
            breed: 'Beagle',
            description: 'Milo is an energetic Beagle who enjoys long walks and sniffing around. He is very curious and loves attention.',
            picture: 'images/milo.jpg'
        },
        {
            name: 'Luna',
            age: '3 years',
            breed: 'Labrador',
            description: 'Luna is a gentle Labrador who enjoys swimming and playing with other dogs. She is very affectionate and great with kids.',
            picture: 'images/luna.jpg'
        },
        {
            name: 'Charlie',
            age: '4 years',
            breed: 'Bulldog',
            description: 'Charlie is a calm Bulldog who loves to lounge around. He is very loyal and protective of his family.',
            picture: 'images/charlie.jpg'
        },
        {
            name: 'Bella',
            age: '2 years',
            breed: 'Poodle',
            description: 'Bella is an intelligent Poodle who loves to learn new tricks. She is very playful and loves to be pampered.',
            picture: 'images/bella.jpg'
        },
        {
            name: 'Rocky',
            age: '5 years',
            breed: 'Boxer',
            description: 'Rocky is a strong Boxer who enjoys running and playing fetch. He is very friendly and loves to meet new people.',
            picture: 'images/rocky.jpg'
        },
        {
            name: 'Daisy',
            age: '3 years',
            breed: 'Shih Tzu',
            description: 'Daisy is a sweet Shih Tzu who loves to cuddle. She is very gentle and great with other pets.',
            picture: 'images/daisy.jpg'
        },
        {
            name: 'Max',
            age: '6 years',
            breed: 'Dachshund',
            description: 'Max is a curious Dachshund who loves to explore. He is very brave and loves to dig.',
            picture: 'images/max.jpg'
        }
    ];

    // Function to get the pet index from the URL parameter
    function getPetIndex() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('pet');
    }

    // Function to update the pet details
    function updatePetDetails(petIndex) {
        if (petIndex !== null && pets[petIndex]) {
            const pet = pets[petIndex];
            document.getElementById('animal-name').textContent = pet.name;
            document.getElementById('animal-age').textContent = pet.age;
            document.getElementById('animal-breed').textContent = pet.breed;
            document.getElementById('animal-description').textContent = pet.description;
            document.getElementById('animal-picture').src = pet.picture;
            document.getElementById('animal-picture').alt = pet.name + ' picture';
        } else {
            alert('Pet not found!');
        }
    }

    // Get the pet index from URL and update the details
    const petIndex = getPetIndex();
    updatePetDetails(petIndex);
});
