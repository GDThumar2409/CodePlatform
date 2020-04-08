from django.urls import path
from prjadmin import views

urlpatterns = [
    path('upload/', views.upload),
    path('uploadview/', views.uploadview),
]