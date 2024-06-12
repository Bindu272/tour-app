import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import './App.css'

const url = 'https://www.course-api.com/react-tours-project'

function App() {
	const [tours, setTours] = useState([])
	const [loading, setLoading] = useState(true)

	async function fetchTours() {
    setLoading(true);

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const jsonData = await response.json();
        setTours(jsonData);
        setLoading(false);
    } catch (error) {
        console.error('Error fetching data:', error.message);
        setLoading(false);
    }
}


	useEffect(() => {
		fetchTours()
	}, [])

	if (loading) {
		return (
			<main>
				<Loading />
			</main>
		)
	}

	return (
		<main>
			{/* send tours here */}
			<Tours tours={tours} />
		</main>
	)
}

export default App
