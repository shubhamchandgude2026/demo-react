# BooksApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiV1BooksGet**](#apiv1booksget) | **GET** /api/v1/Books | |
|[**apiV1BooksIdDelete**](#apiv1booksiddelete) | **DELETE** /api/v1/Books/{id} | |
|[**apiV1BooksIdGet**](#apiv1booksidget) | **GET** /api/v1/Books/{id} | |
|[**apiV1BooksIdPut**](#apiv1booksidput) | **PUT** /api/v1/Books/{id} | |
|[**apiV1BooksPost**](#apiv1bookspost) | **POST** /api/v1/Books | |

# **apiV1BooksGet**
> Array<Book> apiV1BooksGet()


### Example

```typescript
import {
    BooksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BooksApi(configuration);

const { status, data } = await apiInstance.apiV1BooksGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Book>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain; v=1.0, application/json; v=1.0, text/json; v=1.0


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV1BooksIdDelete**
> apiV1BooksIdDelete()


### Example

```typescript
import {
    BooksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BooksApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.apiV1BooksIdDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV1BooksIdGet**
> Book apiV1BooksIdGet()


### Example

```typescript
import {
    BooksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BooksApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.apiV1BooksIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Book**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain; v=1.0, application/json; v=1.0, text/json; v=1.0


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV1BooksIdPut**
> apiV1BooksIdPut()


### Example

```typescript
import {
    BooksApi,
    Configuration,
    Book
} from './api';

const configuration = new Configuration();
const apiInstance = new BooksApi(configuration);

let id: number; // (default to undefined)
let book: Book; // (optional)

const { status, data } = await apiInstance.apiV1BooksIdPut(
    id,
    book
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **book** | **Book**|  | |
| **id** | [**number**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json; v=1.0, text/json; v=1.0, application/*+json; v=1.0
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV1BooksPost**
> apiV1BooksPost()


### Example

```typescript
import {
    BooksApi,
    Configuration,
    Book
} from './api';

const configuration = new Configuration();
const apiInstance = new BooksApi(configuration);

let book: Book; // (optional)

const { status, data } = await apiInstance.apiV1BooksPost(
    book
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **book** | **Book**|  | |


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json; v=1.0, text/json; v=1.0, application/*+json; v=1.0
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

