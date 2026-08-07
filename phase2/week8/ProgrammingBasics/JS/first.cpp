#include <iostream>
#include <string>

using namespace std;

int main () {
    // This line prevents output stalling in Git Bash
    setvbuf(stdout, NULL, _IONBF, 0); 

    string fullName;
    cout << "Enter your Fullname: " << endl;
    
    // Captures the text input line
    getline(cin, fullName); 
    
    cout << "Hello " << fullName << endl; 
    
    return 0;
}
