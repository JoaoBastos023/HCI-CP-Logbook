[Back to main Logbook Page](../hci_logbook.md)

---
# B. Stage 1 - Context Definition


# B.1. Competitor Identification
>	The competitor analysis will entail an identification of all competitors, with brief descriptions and a collection of the look and feel of their solutions, e.g., with screenshots, etc. It will also include a detailed analysis of the competitor deemed the best or more representative.



## B.1a. Competitors


| **Competitor**    		| **Description**                             				| Information repository              	|
| ------------------------- | --------------------------------------------------------- | ------------------------------------- |
| Comboios de Portugal (CP)	| National train service provider with a poorly rated app	| [[Competitor Analysis CP]] 			|
| Flixbus 					| International bus service with a modern well-regarded app	| [[Competitor Analysis FlixBus]]  		|
| Rede Expressos            | Leading Portuguese intercity bus company                  | [[Competitor Analysis RedeExpressos]] |




## B.1b. Detailed Competitor Analysis
>	Choose the most notable competitor and do a more thorough analysis of their interactive solution


### - Heuristic Evaluation

#### Method

- Procedure: Two evaluators assessed the CP app using Nielsen’s 10 heuristics.
- Severity Scale: 1 (Low severity) to 4 (Critical).
- Consensus: Final ratings averaged between evaluators (Bruno and João).


#### Individual Evaluations


- [expert1_heuristic_evaluation_workbook](heuristic_evaluations/expert1_heuristic_evaluation_workbook.md)

- [expert2_heuristic_evaluation_workbook](heuristic_evaluations/expert2_heuristic_evaluation_workbook.md)

- [expert3_heuristic_evaluation_workbook](heuristic_evaluations/expert3_heuristic_evaluation_workbook.md)


#### Consensus

>	After the individual analysis by each expert, all results should be gathered in a consensus table. If an expert has not found any of the problems found by other experts, they should analyse it, at this point, and give it a severity.

| **Issue**       										| **Bruno** 	| **João** |  Recommendations                            |
| ----------------------------------------------------- | ------------- | -------- | ------------------------------------------- |
| No labels for train types (AP, IC, R, U) 				| 3             | 2        | Add tooltips/icons explaining train types.  |
| No warnings about strikes impacting ticket purchases  | 4             | 3        | Integrate strike alerts or screen.          |
| Help button only visible during ticket selection      | 2             | 3        |                                             |
... more on the presentation



---
### - Cognitive Walkthrough

#### Method
[Briefly described  the method you used for the Cognitive Walkthrough analysis. ]

#### Task Selection and Task Analysis

- Tasks Selected: Booking a ticket (most frequent user task).

- Subtasks:
	- Choose destination.
	- Select train type.
	- Pick seat.


| Task                        | Subtasks                               |
| --------------------------- | -------------------------------------- |
| **1. Buyng a grammar book** | Search for available grammar books     |
|                             | Identify a specific book from the list |
|                             | Add the selected book to the cart      |
|                             | Proceeed to checkout                   |


| Task                          | Subtasks                                |
| ----------------------------- | --------------------------------------- |
| **1. Booking a train ticket** | Select departure and destination cities |
|                               | Choose travel date and time             |
|                               | Pick a seat (if applicable)             |
|                               | Confirm booking and make payment        |


#### Results

Task: [This is the task]

| Step # | Task/Action to Perform | Will User Know What to do at this step? (Yes/No) | Notes | If the user does the right thing, will they know it is progressing towards goal? (Yes/No) | Notes | Is Action Successful? (Yes/No) | Suggestions for Improvement |     |
| ------ | ---------------------- | ------------------------------------------------ | ----- | ----------------------------------------------------------------------------------------- | ----- | ------------------------------ | --------------------------- | --- |
| 1      | [Step 1 description]   | [Yes/No]                                         |       | [Yes/No]                                                                                  |       | [Yes/No]                       | [Suggestion 1]              |     |
| 2      | [Step 2 description]   | [Yes/No]                                         |       | [Yes/No]                                                                                  |       | [Yes/No]                       | [Suggestion 2]              |     |
| 3      | [Step 3 description]   | [Yes/No]                                         |       | [Yes/No]                                                                                  |       | [Yes/No]                       | [Suggestion 3]              |     |
| ...    | [Further steps]        | [Yes/No]                                         |       | [Yes/No]                                                                                  |       | [Yes/No]                       | [Suggestions]               |     |



---

# B.2. Users
>	For the users, there are two goals: 1) understand the current status of users in the domain you are addressing. How do they manage, what are the main tasks they do, if they use some tool for the purpose, what are current challenges, what might be improved, what might be new features, ...


## B.2a. Method
- Approach: Conducted 6 semi-structured interviews with daily commuters and occasional travelers.

- Goal: Understand pain points (e.g., payment inefficiency, lack of alerts) and desired features.

- Questions: [EntrevistaPerguntas](Interviews/EntrevistaPerguntas.md)

## B.2b. Results

>	This section tracks all informal user interviews, summarizing key insights and linking to detailed notes for each session. 

### Interview List 
| Date       | Participant / Role | Key Insights                                                    | Link to Notes                |     |
| ---------- | ------------------ | --------------------------------------------------------------- | ---------------------------- | --- |
| 03-09-2000 | Bob / student      | Does most things on paper and would require a complete solution | [📄 Notes](interview-Bob.md) |     |
| ...        |                    |                                                                 |                              |     |

### Common Themes & Patterns 

**Recurring Problems:**

	- No real-time delay/strike alerts.
	- Repetitive payment workflows.

- **Desired Features:**

	- Saved payment methods.
	- Real-time route tracking and alerts.
- --- 



---
[Back to main Logbook Page](../hci_logbook.md)

---
