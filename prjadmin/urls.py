from django.urls import path
from prjadmin import views

urlpatterns = [
    path('upload/', views.upload),
    path('uploadview/', views.uploadview),
    path('adduser/', views.AddUserView.as_view(), name='adduser'),
]