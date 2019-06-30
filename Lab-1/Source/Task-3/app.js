
/**
 * Created by lakshman on 6/29/2019.
 */
angular.module("myapp",[])
    .controller("mycntrl",function($scope,$http)
    {
        $scope.Searchis = function() {
            $scope.name1='';
            $scope.desc1='';
            $scope.ddesc1='';
            $scope.imgurl = ' ';
            var inp = document.getElementById("txt_searchFilter").value;
            var result = $http.get("https://kgsearch.googleapis.com/v1/entities:search?query="+ inp +
                "&key=AIzaSyBrIutnkp8J86H2F86mvm2fW7Iqu63R6Xw&limit=1&indent=True");
            result.success(function(data)
                {
                    $scope.name1 ="Data Not Found";
                    if(data.itemListElement[0].result.name != null && data.itemListElement[0].result.name != " ")
                    {
                        $scope.name1 =data.itemListElement[0].result.name;
                    }
                    $scope.name1 = data.itemListElement[0].result.name;
                    $scope.desc1 = data.itemListElement[0].result.description;
                    $scope.ddesc1 = data.itemListElement[0].result.detailedDescription.articleBody;
                    $scope.imgurl = data.itemListElement[0].result.image.contentUrl;

                }
            )
            result.error(function (data) {
                alert("There was some error processing your request. Please try after some time");

            })
        }



    });