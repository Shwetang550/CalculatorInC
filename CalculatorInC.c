//In this program you have to create the appropriate functions for various operations.
//HINT : I have already named and called the function... So just declare and define that function
#include<stdio.h>
//declare the functions here.
void addition(int a, int b)               //You can take this function as a reference to
{                                         //create functions for other operations :)
    printf("Sum = %d", a+b);
}
void subtration(int a,int b)
{
    printf("sub = %d",a-b);
}
int main()
{
    int a,b;
    char op;
    printf("Enter First Number : ");
    scanf("%d",&a);                        //Inputs 1st number
    printf("Enter Second Number : ");
    scanf("%d",&b);                        //Inputs 2nd number.

    printf("Operation to Perform (+,-,/,%,*) : ");
    printf("choose");
    scanf("%c",&op);                       //Inputs calculation to be performed on the numbers 'a' and 'b'

    switch(op)
    {
        case '+': addition(a,b);           //A function which takes two arguments/parameters and returns nothing but prints the sum of two variable
                 break;
        case '-': subtraction(a,b);        //A function which takes two arguments/parameters and returns nothing but prints the absolute difference between two variable
                 break;
        case '/': division(a,b);           //A function which takes two arguments/parameters and returns nothing but prints the quotient of a/b;
                 break;
        case '%': remainder(a,b);          //A function which takes two arguments/parameters and returns nothing but prints the remainder of a%b
                 break;
        case '*': multiplication(a,b);     //A function which takes two arguments/parameters and returns nothing but prints the product of two numbers
                 break;
        default : printf("Incorrect Option!!!\n");
    }
    return 0;
}
