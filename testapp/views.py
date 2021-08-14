import json
from django.shortcuts import render, get_object_or_404, redirect
from .models import Meeting, Result
from .stt import *
import os
from forminutesprj.settings import MEDIA_ROOT
from testapp.api import *

from .serializer import MeetingSerializer,ResultSerializer
from rest_framework import viewsets

from .keyword import *

# list detail update delate
class MeetingViewSet(viewsets.ModelViewSet):
    queryset = Meeting.objects.all()
    serializer_class = MeetingSerializer

class ResultViewSet(viewsets.ModelViewSet):
    queryset = Result.objects.all()
    serializer_class = ResultSerializer

    def create(self,request,pk):
        meeting = get_object_or_404(Meeting, pk=pk)
        result = Result()
        meeting = get_object_or_404(Meeting, pk=request.POST.get('pk', 1))
        audio = "media/"+str(meeting.file)
        
        res = ClovaSpeechClient().req_upload(file=audio, completion='sync')
        data = json.loads(res.text)
        texts = [data['text']]
        print(texts)
        
        word = Krwordrank.wordrank(texts)
        print(word)
        
        result.script = data['text']
        result.keyword = word
        result.meeting = meeting
        result.save()
        return redirect('/minute/' + str(meeting.id))
