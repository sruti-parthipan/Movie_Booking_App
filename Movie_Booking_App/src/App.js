import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './MovieList';
import TheaterSelection from './TheaterSelection'; 
import SeatSelection from './SeatSelection';
import BookingForm from './BookingForm';
import PaymentPage from './PaymentPage';
import LoginPage from './login';
import SignupPage from './SignUpPage';
import HomePage from './HomePage';
import AboutUsPage from './AboutPage';


const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedTheater, setSelectedTheater] = useState(null);
  const [bookingDetails, setBookingDetails] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');
  const recommendedMovies = [
    
    {
      id: 1,
      title: 'LEO: Bloody Sweet',
      description: 'Starring: Thalapathy Vijay, Trisha, GVM, Sanjay Dutt, Arjun',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6G26AXggYKwASI1c-MDpUBcpr3P4n43wNgA&usqp=CAU',
      
    },
    {
      id: 2,
      title: 'IRUGAPATRU',
      description: 'Starring:Vikram Prabhu,Sri,Vidharth,Shradha Srinath,Saniya Iyappan',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu9f05ailRKI3Ncx80EfjTMz-Klqs8p2biLgzOc47kCA&s',
    },
    {
      id: 3,
      title: 'PARKING',
      description: 'Starring: Harish Kalyan,MS Bhaskar,Indhuja Ravichandran',
      image: 'https://static.moviecrow.com/gallery/20230629/216987-Parking.jpeg',
    },
    {
      id: 4,
      title: 'JOE',
      description: 'Starring: Rio Raj,Malavika manoj,Bhavya Trikha',
      image: 'https://static.moviecrow.com/movies/0-joe/223169-223166-joe-px214.jpg',
    },
    {
      id: 5,
      title: 'ANIMAL',
      description: 'Starring: Ranbhir Kapoor,Bobby Deol,Rashmika Mandhana,Anil Kapoor',
      image: 'https://cdn.zeebiz.com/sites/default/files/2023/12/09/272074-animal-first-look.jpg?im=FitAndFill=(1200,900)',
    },
    
  ];

  const inTheatresMovies = [
    {
      id: 6,
      title: 'LEO: Bloody Sweet',
      description: 'Starring: Thalapathy Vijay, Trisha, GVM, Sanjay Dutt, Arjun',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6G26AXggYKwASI1c-MDpUBcpr3P4n43wNgA&usqp=CAU',
    },
    {
      id: 7,
      title: 'ANIMAL',
      description: 'Starring: Ranbhir Kapoor,Bobby Deol,Rashmika Mandhana,Anil Kapoor',
      image: 'https://cdn.zeebiz.com/sites/default/files/2023/12/09/272074-animal-first-look.jpg?im=FitAndFill=(1200,900)',
    },
    {
      id: 8,
      title: 'JOE',
      description: 'Starring: Rio Raj,Malavika manoj,Bhavya Trikha',
      image: 'https://static.moviecrow.com/movies/0-joe/223169-223166-joe-px214.jpg',
    },
    {
      id: 9,
      title: 'CONJURING KANNAPAN',
      description: 'Starring: Sathish Muthukrishnan, Regina Cassandra and Elli EvRam in prominent roles.',
      image: 'https://c.saavncdn.com/886/Nobody-Sleeps-Here-From-Conjuring-Kannappan-Tamil-2023-20231120131003-500x500.jpg',
    },
    { 
      id: 10,
      title: 'PARKING',
      description: 'Starring: Harish Kalyan,MS Bhaskar,Indhuja Ravichandran',
      image: 'https://static.moviecrow.com/gallery/20230629/216987-Parking.jpeg',
    },
   
  ];

  const comingSoonMovies = [
    {
      id: 11,
      title: 'DUNKI',
      description: 'Starring: Shah Rukh Khan,Vicky Kaushal',
      image: 'https://filmfare.wwmindia.com/content/2023/aug/dunki11692788545.jpg',
    },
    {
      id: 12,
      title: 'SALAAR',
      description: 'Starring: Prabhas,PrithiveeRaj Sukumaran,Shruthi Hasaan',
      image: 'https://pbs.twimg.com/profile_images/1723579743361179648/8XbD-Xvd_400x400.jpg',
    },
    {
      id: 13,
      title: 'CAPTAIN MILLER',
      description: 'Starring: Dhanush,Sundeep kishan,Shivaraj kumar,Priyanka ArulMohan,Vinayakan',
      image: 'https://upload.wikimedia.org/wikipedia/en/1/1c/Captain_Miller_film_poster.jpg',
    },
    {
      id: 14,
      title: 'AYALAAN',
      description: 'Starring: Sivakarthikeyan,Rakul PreetSingh,YogiBabu',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz2gnQcpkMXvV2TCCMrwvvdKwnwSgOIXExGQ&usqp=CAU',
    },
    {
      id: 15,
      title: 'LAL SALAAM',
      description: 'Starring: Vishnu Vishal,Vikranth,cameo: Superstar Rajinikanth',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV4nIkwNOGKBXxmhr3H3TlcGXGEvSxVVWPxg&usqp=CAU',
    },
    
  ];

  const moviesByCategory = [
    { title: 'Recommended For You', movies: recommendedMovies },
    { title: 'In Theatres Now', movies: inTheatresMovies },
    { title: 'Coming Soon', movies: comingSoonMovies },
  ]
  const theaters  = [
    {
      id: 1,
      name: 'Theater A',
      timing: '10:00 AM',
    },
    {
      id: 2,
      name: 'Theater B',
      timing: '02:30 PM',
    },
   
  ];
  

  
  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
    setCurrentPage('seatSelection');
  };

   const handleTheaterSelect = (theater) => {
    setSelectedTheater(theater);
    setCurrentPage('seatSelection');
   };

  const handleSeatSelect = (seats) => {
    setSelectedSeats(seats);
    setCurrentPage('bookingForm');
  };

   

  const handleBookingFormSubmit = (details) => {
    setBookingDetails(details);
    setCurrentPage('paymentPage');
  };

  const handlePaymentSubmit = () => {
    console.log('Payment successful!', bookingDetails);
    setCurrentPage('movieList');
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage onLoginClick={() => setCurrentPage('login')} onSignupClick={() => setCurrentPage('signup')} />} />
        <Route path="/login" element={<LoginPage onPageChange={() => setCurrentPage('home')} />} />
        <Route path="/signup" element={<SignupPage onPageChange={() => setCurrentPage('home')} />} />
        <Route
          path="/movieList"
          element={
            <>
              {moviesByCategory.map((category) => (
                <div key={category.title}>
                  <h2>{category.title}</h2>
                  <MovieList
                    movies={category.movies}
                    onMovieSelect={handleMovieSelect}
                    onPageChange={() => setCurrentPage('theaterSelection')}
                  />
                </div>
              ))}
            </>
          }
        />
        <Route
          path="/theaterSelection"
          element={
            <TheaterSelection
              theaters={theaters}
              onTheaterSelect={handleTheaterSelect}
              onNextClick={() => setCurrentPage('seatSelection')}
            />
          }
        />
        <Route
          path="/seatSelection"
          element={
            selectedMovie && (
              <SeatSelection
                onSeatSelect={handleSeatSelect}
                onNextClick={() => setCurrentPage('bookingForm')}
              />
            )
          }
        />
        <Route
          path="/bookingForm"
          element={
            selectedMovie && (
              <BookingForm
                selectedMovie={selectedMovie}
                selectedSeats={selectedSeats}
                onSubmit={handleBookingFormSubmit}
              />
            )
          }
        />
        <Route
          path="/paymentPage"
          element={
            bookingDetails && (
              <PaymentPage
                selectedMovie={selectedMovie}
                selectedTheater={selectedTheater}
                selectedSeats={selectedSeats}
                bookingDetails={bookingDetails}
                onSubmit={handlePaymentSubmit}
                onBackClick={() => setCurrentPage('bookingForm')}
              />
            )
          }
        />
        <Route path='/aboutus' element={<AboutUsPage/>}/>
        
      </Routes>
    </Router>
  );
};

export default App;