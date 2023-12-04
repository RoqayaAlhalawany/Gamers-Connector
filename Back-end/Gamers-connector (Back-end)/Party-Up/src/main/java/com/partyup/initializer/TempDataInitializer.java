@Component
public class TempDataInitializer {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private CountryRepository countryRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private QuestionsRepository questionsRepository;

    @Autowired
    private PlayerRepository playerRepository;

    @Autowired
    private GameRepository gameRepository;

    @PostConstruct
    public void initialize() {
        // Retrieve the list of questions from the questions repository
        List<Question> questions = questionsRepository.findAll();

        // Loop to create and save 10 Player objects with dummy data
        for (int i = 1; i <= 10; i++) {
            Player player = new Player();

            // Set player details
            player.setUsername("User" + i);
            player.setFirstName("User " + i);
            player.setLastName("User " + i);
            player.setEmail("user" + i + "@example.com");
            player.setPassword(passwordEncoder.encode("1234"));

            // Set the country for the player by retrieving it from the country repository
            player.setCountry(countryRepository.findById("Hungary").get());

            // Add the "ROLE_USER" role to the player
            player.addRole(roleRepository.findByName("ROLE_USER").get());

            // Save the player
            playerRepository.save(player);

            // Retrieve the saved player object
            player = playerRepository.findByUsernameOrEmail(player.getUsername(), player.getUsername()).get();

            List<Rate> rates = new ArrayList<>();

            // Assign random rates to each question for the player
            for (Question question : questions) {
                Rate rate = new Rate();

                // Set player and question IDs for the rate
                rate.setPlayerID(player.getId());
                rate.setQuestionID(question.getId());

                // Generate a random rate between 1 and 5
                Random random = new Random();
                rate.setRate(random.nextInt(5) + 1);

                // Add the rate to the rates list
                rates.add(rate);
            }

            // Set the rates for the player
            player.setRates(rates);

            // Retrieve a specific game (in this case, "League Of Legends") from the game repository
            Game lol = gameRepository.findByName("League Of Legends").get();

            // Create a handle for the player and assign the game and handle name
            Handle handle = new Handle();
            handle.setGame(lol);
            handle.setHandleName("LOL" + i);

            // Add the handle to the player
            player.addHandle(handle);

            // Save the player again with the updated rates and handle
            playerRepository.save(player);
        }
    }
}
