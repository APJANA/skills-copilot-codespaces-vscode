function skillsMember() {
return{
    restrict: 'E',
    templateUrl: 'modules/members/views/skills-member.html',
    controller: 'SkillsMemberController',
    controllerAs: 'skillsMemberCtrl',
    bindToController: true,
    scope: {
        member: '='
    }
};
}