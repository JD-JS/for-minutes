import json
from django.shortcuts import render, get_object_or_404, redirect
from .models import Meeting, Result
from .stt import *

from .serializer import MeetingSerializer, ResultSerializer
from rest_framework import viewsets


def resultCreate(request):
    meeting = get_object_or_404(Meeting, pk=request.POST.get('pk',1))
    result = Result()
    audio = "media/"+str(meeting.file)
    
    res = ClovaSpeechClient().req_upload(file=audio, completion='sync')
    data = json.loads(res.text)
    result.script = data['text']
    result.meeting = meeting
    result.save()

    return redirect('/result/' + str(meeting.id))

class MeetingViewSet(viewsets.ModelViewSet): 
    queryset = Meeting.objects.all() 
    serializer_class = MeetingSerializer

