from rest_framework import permissions

class IsOwnerOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):

        '''this fun. return for me a boolian
        check request(http: get ,post ,put,delete) and obj(is the record in data base)
        get -> ok show the record 
        post ,put,delete -> check if the id same the owner -> ok you are allow ,, othor that No allow to make change on the record

        '''
        # hover over SAFE_METHODS to see which qualify
        if request.method in 'GET':
            return True

        # if we're allowing the purchaser to be null in Model
        # then this will check for that case and allow access

        if obj.owner == request.user:
            return True
        else:
            return False