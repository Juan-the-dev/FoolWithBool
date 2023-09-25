/********************
 * YOUR CODE BELOW! *
 ********************/

function moreThan5(num){
  let greaterThan5 = num > 5
  return greaterThan5
}

function isNewTopScore(score2, score){
  let newTopScore = score < score2
 return newTopScore
}

function isInDanger(grade){
  let inDanger = grade >= 60 &&  grade <= 71
  return inDanger

}
function isCoasting(grade2){
  let coasting = grade2 >= 72 && grade2 <= 83
  return coasting
}
function isSucceeding(grade3){
  let succeding = grade3 >= 84 && grade3 <=92
  return succeding
}
function isFailing (grade4){
  let failling = grade4 < 60
  return failling
}
function isAcing(grade5){
  let acing = grade5 > 92
  return acing
}
function isStudent(role){
  let student = role === 'student'
  return student
}

function isTeacher(role2){
  let teacher = role2 === 'teacher'
  return teacher
}

function isAdmin(role3){
  let admin = role3 === 'admin'
  return admin
}

function isElementary(level){
  let elementary = level === 'elementary'
  return elementary
}

function areDifferentPeople(name1, name2){
  let different = name1 !== name2
  return different
}

function isMiddleSchoolTeacher(role4, level2){
  let isMiddle = role4 === 'teacher' && level2 >= 6 && level2 <=8
  return isMiddle

}
function notAnElementarySchoolAdministrator(level3, role5){
  let notAdmin = level3 !== 'elementary' || role5 !== 'admin'
  return notAdmin

}

/********************************************************************************************
 * CODE BELOW IS FOR EXPORTING THE VARIABLES AND FUNCTIONS YOU WROTE ABOVE TO MAIN.TEST.JS. *
 *                              THIS IS FOR INTERNAL USE ONLY                               *
 *                          DON'T ADD TO OR CHANGE ANYTHING BELOW!                          *
 ********************************************************************************************/


if (typeof moreThan5 === 'undefined') {
  moreThan5 = undefined;
}

if (typeof isNewTopScore === 'undefined') {
  isNewTopScore = undefined;
}

if (typeof isInDanger === 'undefined') {
  isInDanger = undefined;
}

if (typeof isCoasting === 'undefined') {
  isCoasting = undefined;
}

if (typeof isSucceeding === 'undefined') {
  isSucceeding = undefined;
}

if (typeof isFailing === 'undefined') {
  isFailing = undefined;
}

if (typeof isAcing === 'undefined') {
  isAcing = undefined;
}

if (typeof isStudent === 'undefined') {
  isStudent = undefined;
}

if (typeof isTeacher === 'undefined') {
  isTeacher = undefined;
}

if (typeof isAdmin === 'undefined') {
  isAdmin = undefined;
}

if (typeof isElementary === 'undefined') {
  isElementary = undefined;
}

if (typeof areDifferentPeople === 'undefined') {
  areDifferentPeople = undefined;
}

if (typeof notAnElementarySchoolAdministrator === 'undefined') {
  notAnElementarySchoolAdministrator = undefined;
}

if (typeof isMiddleSchoolTeacher === 'undefined') {
  isMiddleSchoolTeacher = undefined;
}


module.exports = {
  moreThan5,
  isNewTopScore,
  isInDanger,
  isCoasting,
  isSucceeding,
  isFailing,
  isAcing,
  isStudent,
  isTeacher,
  isAdmin,
  isElementary,
  areDifferentPeople,
  notAnElementarySchoolAdministrator,
  isMiddleSchoolTeacher,
}
