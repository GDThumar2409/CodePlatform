from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from prjadmin.serializers  import UserSerializer
from django.core import serializers
import requests,json

# Create your views here.

@csrf_exempt
def upload(request):
    if request.method == 'GET':
        snippets = User.objects.all()
        serializer = UserSerializer(snippets, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        print(" in api call")
        try:
            data = JSONParser().parse(request)
            print(data)
            serializer = UserSerializer(data=data)
            print(serializer.is_valid())
            if serializer.is_valid():
                serializer.save()
                print("saved")
                return JsonResponse(serializer.data, status=201)
            else:
                return JsonResponse(serializer.errors, status=400)
        except:
            return HttpResponse("Error")


class AddUserView(APIView):
    def get(self, request):
        snippets = User.objects.all()
        serializer = UserSerializer(snippets, many=True)
        return Response(serializer.data)
    def post(self, request):
        print(" in api call")
        try:
            data = JSONParser().parse(request)
            print(data)
            serializer = Serializer(data=data)
            print(serializer.is_valid())
            if serializer.is_valid():
                serializer.save()
                print("saved")
                return Response(serializer.data)
            else:
                return Response(serializer.errors)
        except:
            return HttpResponse("Error")

@csrf_exempt
def uploadview(request):
    if request.method == "POST":
        """csv_file = request.FILES["csv_file"]
        file_data = csv_file.read().decode("utf-8")"""
        csv_file = request.FILES.getlist('files')[0]
        file_data = csv_file.read().decode("utf-8")
        lines = file_data.split("\n")
        print(lines)
        for line in lines:
            fields = line.split(';')
            print(fields)
            data = {}
            data["username"] = fields[0]
            data["first_name"] = fields[1]
            data["last_name"] = fields[2]
            data["email"] = fields[3]
            data["is_staff"] = fields[4]
            data["password"] = fields[5]
            usr= User.objects.create_user(username=fields[0],email=fields[3],password=fields[5])

            usr.first_name=fields[1]
            usr.last_name=fields[2]
            usr.is_staff=fields[4]
            usr.save()
            """url = 'http://gunjan.pythonanywhere.com/rest-auth/registeration/'
            data=json.dumps(data)
            #data1=serializers.serialize('json', usr)
            #print(data1)
            print("waiting for response")
            x = requests.post(url, json = data)
            #print("waiting for response")
            print(x.status_code)
            if(x.status_code > 300 or x.text == "Error"):
                return HttpResponse("ERROR")"""
        return JsonResponse({"success":"yes"}, status=200)
    else:
        return render(request,'upload.html')
