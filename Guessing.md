# Number Guessing Game
#### Game Structure
```mermaid
flowchart TD
    A[start] --> B[Random Number Generated (1-100)]
    B --> C[Make a Numerical Guess (1-100)]
    C --> D{Correct?}
    D -->|Yes| F[Guess is Correct]
    D -->|No| E[Is The Guess too High?]
    E -->|Yes| G[Too High, Guess Again]
    G --> C
    E -->|No| H[Too Low, Guess Again]
    H --> C
    F --> I[Number Guess Correct, Game Over]
    I --> |Restart|A
```
#### Step Description
1. **_Start_** : Game starts.
2. **_Random Number Generated (1-100)_** : A randomly generated number is created.
3. **_Make a Numerical Guess (1-100)_** : Player makes a numerical guess 1-100.
4. **_Correct?_** : The game checks to see if the player's guess matches the number.
5. **_Is The Guess too High_** : If the player's original guess is incorrect the game checks if it is too high or not.
6. If the incorrect guess is too high **_Too High, Guess Again_** is displayed.
7. If the incorrect guess is too low **_Too Low, Guess Again_** is displayed.
8. If the first guess is incorrect the game prompts the player to guess again, and takes the game back to step 3.
9. **_Number Guess Correct, Game over_** : Tells the Player that the game is over as they have guessed correctly.
10. **_Restart_** : Brings the player back to Step 1, and completely restarts the game.