var age;
var isThirtyYearsOld;
var isAdult;
var isNotCentennial;


age = window.prompt('Quel est votre âge ?');

var firstName = 'Tom';
// (age === 30);
//(age >== 30);
//(age > 30);
//(age <== 30);
//(age < 30);
//(age !== 30);

isThirtyYearsOld = (age == 30);
isAdult          = (age >= 18);
isNotCentennial  = (age != 100);

document.write('<p>Vous avez trente ans : ' + isThirtyYearsOld + '.</p>');
document.write('<p>Vous êtes majeur : ' + isAdult + '.</p>');
document.write("<p>Vous n'êtes pas centenaire : " + isNotCentennial + '.</p>');

if (age > 18) {

	document.write('<p>Vous êtes majeur.</p>');

}
if(age < 20)
{
    document.write('<p>Vous avez moins de 20 ans.</p>');
}
else
{
    document.write('<p>Vous avez plus de 20 ans.</p>');
}
if (firstName == 'Paul') {

	 document.write('<p>Salut Paul</p>');

} else {
	document.write("t'es qui ?");

}
if(firstName == 'Elsa')
{
    document.write("<p>Vous vous appelez Elsa.</p>");
}
else if(firstName == 'Charlotte')
{
    document.write("<p>Vous vous appelez Charlotte.</p>");
}
else
{
    document.write("<p>Vous ne vous appelez ni Elsa ni Charlotte.</p>");
}

/*if((firstName == 'Tom') && (age != 40))
{
    document.write("<p>Vous vous appelez Tom et vous n'êtes pas quadra.</p>");
}*/

if(firstName == 'Tom' || age != 40)
{
    document.write("<p>Vous vous appelez Tom et vous n'êtes pas quadra.</p>");
}
