#include <iostream>
#include <fstream>
#include <vector>
#include <algorithm>
#include <string>
using namespace std;
struct Player {
    string name;
    int score;};
bool compare(Player a, Player b) {
    return a.score > b.score;}
const int TOTAL_QUESTIONS = 5;
const string LEADERBOARD_FILE = "leaderboard.txt";
string questions[TOTAL_QUESTIONS] = {
    "Q1: What is the capital of India? ",
    "Q2: How many planets are in solar system? ",
    "Q3: Who invented C++ language? ",
    "Q4: What does CPU stand for? ",
    "Q5: Which data structure uses LIFO? "};
string answers[TOTAL_QUESTIONS] = {
    "delhi",
    "8",
    "bjarne stroustrup",
    "central processing unit",
    "stack"
};

// TASK 1: Conduct Quiz
int conductQuiz(string name) {
    cout << "\nWelcome, " << name << "! Quiz starting...\n\n";
    int score = 0;
    string userAnswer;
    cin.ignore();
    for (int i = 0; i < TOTAL_QUESTIONS; i++) {
        cout << questions[i];
        getline(cin, userAnswer);
        for (char &c : userAnswer) c = tolower(c);
        if (userAnswer == answers[i]) {
            cout << "Correct!\n\n";
            score++;
        } else {
            cout << "Wrong! Answer: " << answers[i] << "\n\n";
        }
    }
    cout << "------------------------------------\n";
    cout << name << ", your score: " << score << "/" << TOTAL_QUESTIONS << "\n";
    cout << "------------------------------------\n";
    return score;
}

// TASK 2: Display in-memory leaderboard
void displayMemoryLeaderboard(vector<Player> lb) {
    sort(lb.begin(), lb.end(), compare);
    cout << "\n======== LEADERBOARD ========\n";
    for (int i = 0; i < lb.size(); i++) {
        cout << "Rank " << i+1 << ": " << lb[i].name
             << " - " << lb[i].score << "/" << TOTAL_QUESTIONS << "\n";
    }
    cout << "=============================\n\n";
}

// TASK 3: Save score to file
void saveToFile(string name, int score) {
    ofstream file(LEADERBOARD_FILE, ios::app);
    if (file.is_open()) {
        file << name << "," << score << "\n";
        file.close();
    }
}

// TASK 3: Display leaderboard from file
void displayFileLeaderboard() {
    ifstream file(LEADERBOARD_FILE);
    if (!file.is_open()) {
        cout << "No leaderboard data found!\n";
        return;
    }
    vector<Player> data;
    string line;
    while (getline(file, line)) {
        int pos = line.find(',');
        if (pos != string::npos) {
            Player p;
            p.name = line.substr(0, pos);
            p.score = stoi(line.substr(pos + 1));
            data.push_back(p);
        }
    }
    file.close();
    sort(data.begin(), data.end(), compare);
    cout << "\n===== TOP SCORERS (From File) =====\n";
    for (int i = 0; i < data.size(); i++) {
        cout << "Rank " << i+1 << ": " << data[i].name
             << " - " << data[i].score << "/" << TOTAL_QUESTIONS << "\n";
    }
    cout << "====================================\n\n";
}

// MAIN
int main() {
    vector<Player> leaderboard;
    char choice;
    cout << "==========================================\n";
    cout << "     WELCOME TO THE LEADERBOARD QUIZ      \n";
    cout << "==========================================\n\n";
    do {
        cout << "Attempt the quiz? (y/n): ";
        cin >> choice;
        if (choice == 'y' || choice == 'Y') {
            string name;
            cout << "Enter your name: ";
            cin >> name;
            int score = conductQuiz(name);
            Player p;
            p.name = name;
            p.score = score;
            leaderboard.push_back(p);
            saveToFile(name, score);
            displayMemoryLeaderboard(leaderboard);
        }
    } while (choice == 'y' || choice == 'Y');

    cout << "\nFinal Leaderboard from File:\n";
    displayFileLeaderboard();
    cout << "Thank you! Goodbye!\n";
    return 0;
}