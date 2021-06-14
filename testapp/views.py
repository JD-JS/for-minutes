import json
from django.shortcuts import render, get_object_or_404, redirect
from .models import Meeting, Result
from testapp.stt import *
# Create your views here.

def resultCreate(request):
    meeting = get_object_or_404(Meeting, pk=request.POST['pk'])
    result = Result()
    audio = "../media/"+str(meeting.file)
    if __name__ == '__main__':
        res = ClovaSpeechClient().req_upload(file=audio, completion='sync')
        data = res.text
        result.script = data["text"]
        result.save()
    
    return redirect('/result/' + str(meeting.id))