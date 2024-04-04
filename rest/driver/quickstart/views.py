from django.contrib.auth.models import Group, User
from rest_framework import permissions, viewsets

from driver.quickstart.serializers import GroupSerializer, UserSerializer, CodebaseSerializer
from driver.quickstart.models import Codebase


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all().order_by('name')
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]


class CodebaseViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows codebases to be viewed or edited.
    """
    queryset = Codebase.objects.all().order_by('name')
    serializer_class = CodebaseSerializer
    permission_classes = [permissions.IsAuthenticated]