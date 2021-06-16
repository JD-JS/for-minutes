from rest_framework import generics
from rest_framework.response import Response
from .serializer import MeetingSerializer
from .serializer import ResultSerializer
from .models import Meeting, Result


# class MeetingApi(generics.ListAPIView):
#    queryset = Meeting.objects.all()
#     serializer_class = MeetingSerializer


 
# class MeetingCreateApi(generics.CreateAPIView):
#     queryset = Meeting.objects.all()
#     serializer_class = MeetingSerializer

# class MeetingUpdateApi(generics.RetrieveUpdateAPIView):
#     queryset = Meeting.objects.all()
#     serializer_class = MeetingSerializer

# class MeetingDeleteApi(generics.DestroyAPIView):
#     queryset = Meeting.objects.all()
#     serializer_class = MeetingSerializer

class ResultApi(generics.ListAPIView):
    queryset = Result.objects.all()
    serializer_class = ResultSerializer

class ResultUpdateApi(generics.RetrieveUpdateAPIView):
    queryset = Result.objects.all()
    serializer_class = ResultSerializer