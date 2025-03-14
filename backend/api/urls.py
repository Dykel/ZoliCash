from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CompanyViewSet, SaleViewSet, TaskViewSet

router = DefaultRouter()
router.register(r'companies', CompanyViewSet)
router.register(r'sales', SaleViewSet)
router.register(r'tasks', TaskViewSet)

urlpatterns = [
    path('', include(router.urls)),
]